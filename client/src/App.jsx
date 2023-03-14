import { Switch, Route } from "react-router-dom"



export default function App() {



  return (
    <div>
      <Header />

      <h1>This is the App component</h1>

      <Switch>
        <Route exact path="">
          <HomePage />
        </Route>
        <Route path="">
          <AboutUsPage />
        </Route>
        <Route path="">
          <Testimonials />
        </Route>
        <Route path="">

        </Route>
        <Route path="">

        </Route>
        
      </Switch>

      <Footer />
    </div>
  )
}