export interface FaqData {
    question: string;
    answer: string;
}

export const faqData: FaqData[] = [
    {
        question: "What is this?",
        answer: "This is a FAQ component."
    },
    {
        question: "How do I use it?",
        answer: "You can use it by importing it and passing the data as a prop."
    },
    {
        question: "What is the data type?",
        answer: "The data type is an array of objects with a question and answer."
    }
];

