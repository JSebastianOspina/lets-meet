"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { QuestionCategoryEnum } from "../../domain/enums/enums";
import { allQuestions } from "../../domain/data/questions/es";
import { clearPreviewData } from "next/dist/server/api-utils";

const getTextColor = (category: QuestionCategoryEnum) => {
  switch (category) {
    case QuestionCategoryEnum.Connection:
      return "text-connection";
    case QuestionCategoryEnum.Perception:
      return "text-perception";
    case QuestionCategoryEnum.Reflection:
      return "text-reflection";
  }
};
const getCategoryQuestions = (category: QuestionCategoryEnum) => {
  console.log({ category });
  return allQuestions[category].questions;
};
export const PlayScreen = () => {
  const [category, setCategory] = useState<QuestionCategoryEnum>(
    QuestionCategoryEnum.Connection
  );
  const categoryQuestions = useRef(getCategoryQuestions(category));
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  useEffect(() => {
    getNextQuestion();
  }, [category]);

  const getNextQuestion = () => {
    if (categoryQuestions.current.length === 0) alert("No more questions");

    const randomQuestionIndex = Math.floor(
      Math.random() * categoryQuestions.current.length
    );
    const selectecQuestion = categoryQuestions.current.splice(
      randomQuestionIndex,
      1
    )[0];
    setCurrentQuestion(selectecQuestion);
  };

  const textColor = useMemo(() => {
    return getTextColor(category);
  }, [category]);

  console.log({ allQuestions, currentQuestion, textColor });

  return (
    <div className="w-full h-full  grid grid-cols-1 grid-rows-6 gap-4 justify-center items-center bg-background px-5  py-20 text-center">
      <h2 className={`row-span-5 text-3xl font-black ${textColor}`}>{currentQuestion}</h2>
      <button
        className={`row-start-6 border border-white px-10 py-5 ${textColor}`}
        onClick={() => getNextQuestion()}
      >
        Siguiente pregunta
      </button>
      <button
        className={`row-start-7 border border-white px-10 py-5 ${textColor}`}
        onClick={() => getNextQuestion()}
      >
        Siguiente Categoría
      </button>
    </div>
  );
};
