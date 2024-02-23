import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
// Dummy data objects
const dummyData1 = {
  _id: "1",
  title: "Dummy Question 1",
  tags: [
    { _id: "tag1", name: "Tag 1" },
    { _id: "tag2", name: "Tag 2" },
  ],
  author: {
    _id: "author1",
    name: "Author 1",
    // picture: "author1.jpg",
  },
  upvotes: ["user1", "user2"],
  views: 20,
  answers: [{}, {}, {}], // You can add specific objects here according to your object structure
  createdAt: new Date("2024-02-23T00:00:00Z"),
  clerkId: "clerk1",
};

const dummyData2 = {
  _id: "2",
  title: "Dummy Question 2",
  tags: [
    { _id: "tag3", name: "Tag 3" },
    { _id: "tag4", name: "Tag 4" },
  ],
  author: {
    _id: "author2",
    name: "Author 2",
    // picture: "author2.jpg",
  },
  upvotes: ["user3"],
  views: 15,
  answers: [{}, {}], // You can add specific objects here according to your object structure
  createdAt: new Date("2024-02-22T00:00:00Z"),
};

const dummyData3 = {
  _id: "3",
  title: "Dummy Question 3",
  tags: [
    { _id: "tag5", name: "Tag 5" },
    { _id: "tag6", name: "Tag 6" },
  ],
  author: {
    _id: "author3",
    name: "Author 3",
    // picture: "author3.jpg",
  },
  upvotes: ["user4", "user5", "user6"],
  views: 25,
  answers: [{}, {}, {}, {}], // You can add specific objects here according to your object structure
  createdAt: new Date("2024-02-21T00:00:00Z"),
};

// Array to hold dummy data objects
const questions = [dummyData1, dummyData2, dummyData3];

export default async function Home() {
  // const result = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex flex-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
