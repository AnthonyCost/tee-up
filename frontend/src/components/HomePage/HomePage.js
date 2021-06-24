import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="welcomeBanner">
        <h1>Welcome to Tee Up!</h1>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1600185816226-0084d7bb9882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80" />
      </div>
      <div className="textBlock">
        <div>
          <h2>What we're about</h2>
        </div>
        <div>
          <p>
            Here at Tee Up, we want golfers from all walks of life and all skill
            levels to come together and enjoy the beautiful yet ever challenging
            sport of Golf. Even if you just came upon this site and have no idea
            what the term Tee Up even refers to, we implore you come check out
            what this game is all about and welcome you with open arms! Always
            remember, keep your eye on the ball and aim towards the center of
            the fairway!
          </p>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1604702686571-f03d002a7c53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80" />
      <div className="textBlock">
        <div>
          <h2>What we offer</h2>
        </div>
        <div>
          <p>
            Ever have that feeling that you just want to go play a round and
            want to enjoy the game with like-minded individuals? Then Tee Up is
            made for you! (yes you!) Tee Up offers a wide variety of groups made
            from users like you, catering to certain playstyles and rulesets for
            rounds! You can take a gander at the groups page to take a peak at
            whats in store! Also while you're here, feel free to sign up and
            create a group of your own!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
