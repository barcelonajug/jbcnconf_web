import React from "react"
import { useLocation } from "react-router-dom"
import Footer from "./feature/common/Footer"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { TopMenu } from "./feature/common/TopMenu"
import { AppRoutes } from "./feature/common/AppRoutes"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App = () => {
  const location = useLocation()

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <TopMenu />
        <TransitionGroup>
          <CSSTransition classNames="fade" key={location.key} timeout={750}>
            <div>
              <AppRoutes />
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </main>
    </QueryClientProvider>
  )
}

export default App
