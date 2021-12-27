import { useParams } from "react-router-dom"

const TalksDetail = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>TalksDetail: {id}</h1>
    </div>
  )
}
export default TalksDetail
