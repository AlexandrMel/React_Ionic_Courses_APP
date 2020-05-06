import React, { useState } from "react";
import CoursesContext, { Course, Goal } from "./courses-context";
const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "React - The Complete Guide",
      enrolled: new Date(),
      goals: [],
      included: true
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
      included: true
    };
    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };
  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = { id: Math.random().toString(), text };
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updateCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.concat(
        newGoal
      );
      const updatedCourse = { ...updatedCourses[updateCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };
  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.filter(
        (goal) => goal.id !== goalId
      );
      const updatedCourse = { ...updatedCourses[updateCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };
  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updateCourseIndex
      ].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );
      const updatedGoal = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text: newText,
      };
      updatedCourseGoals[updatedCourseGoalIndex] =updatedGoal;
      const updatedCourse = { ...updatedCourses[updateCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };
  const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updateCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
   
      const updatedCourse = { ...updatedCourses[updateCourseIndex], included: isIncluded };
      updatedCourses[updateCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  }
  return (
    <CoursesContext.Provider
      value={{ courses, addGoal, addCourse, deleteGoal, updateGoal, changeCourseFilter }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};
export default CoursesContextProvider;
