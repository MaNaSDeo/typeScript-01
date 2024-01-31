/*
type CourseGoalProps = {
  title: string;
  description: string;
};
*/

/*
interface CourseGoalProps {
  title: string;
  description: string;
}
*/

import { type ReactNode } from "react";
interface CourseGoalProps {
  title: string;
  children: ReactNode;
}
/*
import { type PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{ title: string }>;
*/

// export default function CourseGoal({ title, description }: CourseGoalProps) {
export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

/*
import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  children,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
*/
