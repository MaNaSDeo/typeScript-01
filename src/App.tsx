import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      {/* <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      /> */}
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}