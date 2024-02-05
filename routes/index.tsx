import { Pbutton } from "../components/Pbutton.tsx";
export default function Home() {
  return (
    <>
      <div className="wrapper-1">
        <h1 id="motd">
          Welcome to <br />Green Goodies
        </h1>
        <div id="r-content">
          <img src="/img/coli.png" class="img-size" id="coli" />
          <img src="/img/brococoi.png" class="img-size" id="brococoi" />
          <img src="/img/tomato.png" class="img-size" id="tomato" />
        </div>
        <div id="block-1">
          <Pbutton id="btn-1">
            <h1>Click here</h1>
          </Pbutton> 
        </div>
        <div id="block-2">
          <h1>To Explore</h1>
        </div>
      </div>
      <div className="wrapper-2">
      <div className="footer">
        //hello world
        hie
      </div>
      </div>
    </>
  );
}
 
