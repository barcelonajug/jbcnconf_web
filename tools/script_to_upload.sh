#!/bin/bash
#
# This bash script creates a build a list of commands on a 'commands.log' file with all the commands you can run to
# upload all the JBCNConf videos, tagged based on the 'talks' and 'speakers' information.
#
# It will retrieve its tags, content, and title for each talk and it will add a new hashtag name ('jbcn${YEAR}') and
# create a proper title (ex: '${The title of the talk} - by {the author} at JBCNConf'${YEAR}') and content linking to
# the website. Also all videos are saved in a playlist JBCNConf'${YEAR} and stored hidden, just to be reviewed
#
# Also the commands generated will save in an output file 'output.log' the final URL of each video once they are
# completely uploaded.
#
# Tools required:
# -jq (https://stedolan.github.io/jq/)
# -Youtube upload (https://github.com/tokland/youtube-upload)
#  + it's setup to be able to upload your videos to your account
#
# Your 'talks.json' have to have a filed named 'file' with the name of the filename of the recorded talk.
# Example:
#  {
#    "items": [
#    {
#      "type": "talk",
#      "level": "Intermediate",
#      "file": "Venkat Video OK.mp4",
#      "video": "",
#      ...
#    },
#    ...
#   ]
# }
#
# Youtube has some limitations (ex: video title size not greater than 100chars, strange chars, etc) and because of that I
# decided to write this script to have the possibility to change the video title easily and re-run the command instead of
# running everything one time and see a lot of video uploads failing.
#
YY=17
YYYY=2017

TALKS_FILE=../$YYYY/_data/talks.json
AUTHORS_FILE=../$YYYY/_data/speakers.json

VIDEOS_ROOT_PATH=~/Desktop/tmp/BarcelonaJUG/JBCNConf/2017

COMMANDS_FILE=commands.log
OUTPUT_FILE=output.log

titles=()
filenames=()
tags=()
n_tags=()
authors=()
ref_authors=()
n_authors=()

commands=()

function print_array() {
	local index
	local array
	array=("${!1}")
	index=0
	echo "--- START debugging array [${#array[@]} elements] ---"
	for element in "${array[@]}"
	do
	   echo "${element} - $index/${#array[@]}"
	   let index=index+1
	done
	echo "--- END debugging array ---"
}

function fill_titles() {
	while IFS= read -r line; do
	    titles+=( "${line}" )
	    #echo $line

	    # TODO - filter Talks only (not workshops) ... but also on the rest of iterations around .items

	    # jq '.items[] | select(.type == "talk") | .title' talks.json
	done < <( jq '.items[].title' $TALKS_FILE )
	TITLES_LENGTH=${#titles[@]}
	echo "$TITLES_LENGTH Titles "
}
function fill_filenames() {
	while IFS= read -r line; do
	    filenames+=( "$line" )
	    #echo $line
	done < <( jq '.items[].file' $TALKS_FILE )
	FILENAMES_LENGTH=${#filenames[@]}
	echo "$FILENAMES_LENGTH filenames "
}

function fill_tags() {
	echo "--- Filling tags ---"
	local TITLE=0
	while [ $TITLE -lt $TITLES_LENGTH ]; do
		local TAG=0
		local NUM_TAGS=$(jq ".items[$TITLE].tags | length" $TALKS_FILE)
		#echo "--- $TITLE - tags: $NUM_TAGS"
		n_tags+=( "$NUM_TAGS" )
		while [ $TAG -lt $NUM_TAGS ]; do
			line=$(jq ".items[$TITLE].tags[$TAG]" $TALKS_FILE)
			tags+=( "$line" )
			#echo ">>> $TITLE,$TAG - $line"
			let TAG=TAG+1
		done
		# echo "$TITLE - tags: $NUM_TAGS ---"
		let TITLE=TITLE+1
	done
	echo "--- End filling tags ---"
}

function fill_authors() {
	echo "--- Filling authors ---"
	local TITLE=0
	while [ $TITLE -lt $TITLES_LENGTH ]; do
		local AUTHOR=0
		local NUM_AUTHORS=$(jq ".items[$TITLE].speakers | length" $TALKS_FILE)
		# echo "--- $TITLE - authors: $NUM_AUTHORS"
		n_authors+=( "$NUM_AUTHORS" )
		while [ $AUTHOR -lt $NUM_AUTHORS ]; do
			local REF=$(jq ".items[$TITLE].speakers[$AUTHOR]" $TALKS_FILE)
			ref_authors+=( "$REF" )
			local AUTHOR_NAME=$(jq ".items[] | select(.ref == $REF) | .name" $AUTHORS_FILE)
			#echo "author $AUTHOR_NAME - talk $TITLE - ref $REF"
			authors+=( "$AUTHOR_NAME" )
			let AUTHOR=AUTHOR+1
		done
		let TITLE=TITLE+1
	done
	echo "--- End filling authors ---"
}

function remove_quotes() {
	text="$@"
	# return eval "$1='$(sed -e 's/^"//' -e 's/"$//' <<<"$1")'";
	# echo "TEXT: [$text] - OUTPUT >> [" $(sed -e 's/"//g' -e 's/"$//g' <<<"$text") "]" >> $COMMANDS_FILE
	echo $(sed -e 's/"//g' -e 's/"$//g' <<<"$text");
}

function retrieve_tags() {
	local index=$1
	local total=$2
	# echo "index: $index - total: $total"
	local result=''
	for (( i=index; i<index+total; i++ ))
	do
   		# echo "${tags[$i]} -- $i - $index/$total"
   		result+=${tags[$i]},
	done
	result+="jbcn$YY"
	# let length=${#result}-1
	let length=${#result}
	# echo "   >>> Result: ${result} ------ $length"
	remove_quotes ${result:0:$length}
	# echo $(sed -e 's/^"//' -e 's/"$//' <<<"${result:0:$length}");
	# echo ${result:0:$length}
}

function retrieve_speakers() {
	local index=$1
	local total=$2

	local LINK="http://www.jbcnconf.com/$YYYY/infoSpeaker.html?ref="
	local SUFFIX2="at JBCNConf'$YY -"

	local AUTHOR_REF=${ref_authors[$N_AUTHOR]}

	# echo "index: $index - total: $total"
	local speakers=''
	local links=''
	for (( i=index; i<index+total; i++ ))
	do
   		# echo "${tags[$i]} -- $i - $index/$total"
   		speakers+=${authors[$i]}" and "
   		links+=${LINK}${ref_authors[$i]}" "
	done
	let speakers_l=${#speakers}-4
	let links_l=${#links}-1

	# echo "   >>> Result: ${speakers} ------ $speakers_l" >> $COMMANDS_FILE
	# echo "   >>> Result: ${links} ------ $links_l" >> $COMMANDS_FILE

	speakers=$(remove_quotes ${speakers:0:$speakers_l})
	links=$(remove_quotes ${links:0:$links_l})

	# echo $speakers $SUFFIX2 $links >> $COMMANDS_FILE
	echo $speakers $SUFFIX2 $links
}

function retrieve_title_by_at() {
	local index=$1
	local total=$2

	local SUFFIX2="at JBCNConf'$YY"

	local speakers=''
	for (( i=index; i<index+total; i++ ))
	do
   		# echo "${tags[$i]} -- $i - $index/$total"
   		speakers+=${authors[$i]}" and "
	done
	let speakers_l=${#speakers}-4

	# echo "   >>> Result: ${speakers} ------ " >> $COMMANDS_FILE

	speakers=$(remove_quotes ${speakers:0:$speakers_l})

	# echo $speakers $SUFFIX2 >> $COMMANDS_FILE
	echo $speakers $SUFFIX2
}

function build_commands() {
	local BY=" - by "

	echo "----- Start -----" > $COMMANDS_FILE

	local N_TITLE=0
	local PREV_TAG=0
	local PREV_SPEAKER=0

	echo "--- Building commands ---"
	while [ $N_TITLE -lt $TITLES_LENGTH ]; do
		# local TITLE=${titles[$N_TITLE]} | sed 's/[\._-]//g'
		local TITLE=${titles[$N_TITLE]}
		# TITLE=$(sed -e 's/^"//' -e 's/"$//' <<<"$TITLE")
		TITLE=$(remove_quotes ${TITLE})
		# echo "Title: [${TITLE}]"

		# TODO - strip title, Youtube does not accept Titles greater than 100chars

		local NUM_TAGS=${n_tags[$N_TITLE]}
		local TAGNAMES=$(retrieve_tags ${PREV_TAG} ${NUM_TAGS})
		let PREV_TAG=PREV_TAG+NUM_TAGS

		local NUM_AUTHORS=${n_authors[$N_TITLE]}
		local SPEAKERS=$(retrieve_speakers ${PREV_SPEAKER} ${NUM_AUTHORS})
		local TITLE_BY_AT=$(echo $TITLE $BY $(retrieve_title_by_at ${PREV_SPEAKER} ${NUM_AUTHORS}))
		let PREV_SPEAKER=PREV_SPEAKER+NUM_AUTHORS

		local FILENAME=$(remove_quotes ${filenames[$N_TITLE]})
		# local T=$(sed -e 's/^"//' -e 's/"$//' <<<"${TAGNAMES}");
		# echo "--- $TITLE - $AUTHOR_NAME/$AUTHOR_REF - num_authors: $NUM_AUTHORS, num_tags: $NUM_TAGS, tags: [$TAGNAMES / $T], filename: $FILENAME ---"
		echo "--- $TITLE_BY_AT - num_authors: $NUM_AUTHORS, num_tags: $NUM_TAGS, tags: [$(remove_quotes $TAGNAMES)], filename: $FILENAME ---"

		PREV_COMMAND="echo \"'$TITLE' - https://www.youtube.com/watch?v=\" >> $OUTPUT_FILE"
		COMMAND="$PREV_COMMAND && youtube-upload --title=\"$TITLE_BY_AT\" --description=\"$TITLE $BY $SPEAKERS\" \
		--category='Science & Technology' --tags=\"$TAGNAMES\" \
		--default-language=\"en\" --default-audio-language=\"en\" --client-secrets=client_id.json \
		--playlist \"JBCNConf'$YY\" --privacy=\"private\" \"$VIDEOS_ROOT_PATH/$FILENAME\" >> $OUTPUT_FILE"

		echo $COMMAND >> $COMMANDS_FILE
		echo "" >> $COMMANDS_FILE
		commands+=( "$COMMAND" )

		# if test $N_TITLE -eq 5; then
		# 	echo $N_TITLE
		# 	exit 0
		# fi

		echo .
		let N_TITLE=N_TITLE+1
	done
	echo "--- End building commands ---"

	echo "----- End -----" >> $COMMANDS_FILE
}

fill_titles
fill_filenames
fill_tags

# print_array n_tags[@]
# print_array tags[@]
# print_array titles[@]
# print_array filenames[@]

fill_authors

# print_array n_authors[@]
# print_array authors[@]
# print_array ref_authors[@]

build_commands

#print_array commands[@]
