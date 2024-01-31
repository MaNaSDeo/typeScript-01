import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
/*
interface CourseGoalListProps {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
}
*/
interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
