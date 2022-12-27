import "./App.css";
import Button from "./components/Button";
import Aside from "./components/Aside"

const footer = (
  <footer className="footer">created by bamideleaduke - devChallenges.io</footer>
  );


function App() {
  return (
    <div className="App body">
      <Aside/>
      
    <main className="main">
    <h2 className="title">Buttons</h2>

    {/* default */}
   <section >
    <h5>Default styling with :hover</h5>
    <div className="btn">
    <Button text="Default" />
    <Button color="outline" text="Default" />
    <Button color="text" text="Default" />
    <Button color="disableShadow primary" text="Default" />
    </div>
   </section>

   {/* disabled */}
   <section >
   <h5>Disabled</h5>
  <div className="btn s-around">
    <Button color="disabled" text="Default" />
    <Button color="text disabled" text="Default" />
  </div>
   </section>

     {/* with icons */}
   <section >
     <h5>start icon and end icon</h5>
   <div className="btn s-around">
      <Button starticon color="icon primary" text="Default" />
      <Button endicon color="icon primary" text="Default" />
   </div>
   </section>

      {/* sizes */}
    <section>
      <h5>Default sizes</h5>
    <div className="btn">
      <Button color="disableShadow sm primary" text="Default" />
     <Button color="disableShadow md primary" text="Default" />
     <Button color="disableShadow lg primary" text="Default" />
    </div>
    </section>

      {/* colors */}
     <section>
      <h5>Default colors</h5>
    <div className="btn">
      <Button color="sm default" text="Default" />
      <Button color="md primary" text="Default" />
      <Button color="lg secondary" text="Default" />
    </div>
     </section>
      {footer}
      </main>
    </div>
  );
}

export default App;
