import Post from "./Post";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Post
        imgSrc={"./src/assets/profile.jpg"}
        header={"I am Teddy Pascual"}
        // month={"September"}
        // day={"21"}
        // year={"2023"}
      />
      <Post
        imgSrc={
          "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        header={"Dodge Challenger"}
        // month={"September"}
        // day={"21"}
        // year={"2023"}
      />
      <Post
        imgSrc={
          "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        header={"Dodge Challenger"}
        month={"September"}
        day={"21"}
        year={"2023"}
      />
    </div>
  );
};

export default Home;
