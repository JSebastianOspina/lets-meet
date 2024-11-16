"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { QuestionCategoryEnum } from "../../domain/enums/types";
import { allQuestions } from "../../domain/data/questions/es";
import { categoryOrder } from "../../domain/data/categories/order";
import { Button } from "./button";
import { getCategoryDisplayName } from "../../domain/utils";

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
  return allQuestions[category].questions;
};
const getNextCategoryIndex = (actualIndex: number) => {
  const possibleIndex = actualIndex + 1;
  return possibleIndex >= categoryOrder.length ? actualIndex : possibleIndex;
};
const getPrevCategoryIndex = (actualIndex: number) => {
  const possibleIndex = actualIndex - 1;
  return possibleIndex === -1 ? actualIndex : possibleIndex;
};

export const PlayScreen = () => {
  const currentCategoryRef = useRef(0);
  const nextCategoryIndex = getNextCategoryIndex(currentCategoryRef.current);
  const prevCategoryIndex = getPrevCategoryIndex(currentCategoryRef.current);

  const [category, setCategory] = useState<QuestionCategoryEnum>(
    categoryOrder[currentCategoryRef.current]
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

  const handleCategoryChange = (action: "next" | "prev") => {
    const newIndex = action === "next" ? nextCategoryIndex : prevCategoryIndex;

    currentCategoryRef.current = newIndex;
    setCategory(categoryOrder[newIndex]);
    categoryQuestions.current = getCategoryQuestions(categoryOrder[newIndex]);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-background px-5 py-10 md:py-20 text-center">
      <h2 className={`text-3xl font-black ${textColor}`}>
        {getCategoryDisplayName(category)}
      </h2>
      <div className="flex-1 flex items-center justify-center ">
        <h2 className={`text-3xl font-black ${textColor}`}>
          {currentQuestion}
        </h2>
      </div>

      <Button
        text="Siguiente pregunta"
        action={() => getNextQuestion()}
        extraClasses={`mb-8 bg-${category}  text-background border-none`}
      />
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-12 w-full justify-center">
        <Button
          text="Categoría siguiente"
          action={() => handleCategoryChange("next")}
          disabled={category === categoryOrder[categoryOrder.length - 1]}
          extraClasses={getTextColor(categoryOrder[nextCategoryIndex])}
        />
        <Button
          text="Categoría anterior"
          action={() => handleCategoryChange("prev")}
          disabled={category === categoryOrder[0]}
          extraClasses={getTextColor(categoryOrder[prevCategoryIndex])}
        />
      </div>
    </div>
  );
};
