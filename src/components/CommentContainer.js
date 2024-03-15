import React from "react";
import UserLogo from "../assets/userLogo.svg";

const commentsData = [
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [],
  },
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [
      {
        name: "Sparsh Bhardwaj",
        text: "lorem ipsum dolor sit amet, consectrtur adip",
        replies: [
          {
            name: "Sparsh Bhardwaj",
            text: "lorem ipsum dolor sit amet, consectrtur adip",
            replies: [
              {
                name: "Sparsh Bhardwaj",
                text: "lorem ipsum dolor sit amet, consectrtur adip",
                replies: [
                  {
                    name: "Sparsh Bhardwaj",
                    text: "lorem ipsum dolor sit amet, consectrtur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Sparsh Bhardwaj",
            text: "lorem ipsum dolor sit amet, consectrtur adip",
            replies: [
              {
                name: "Sparsh Bhardwaj",
                text: "lorem ipsum dolor sit amet, consectrtur adip",
                replies: [],
              },
            ],
          },
          {
            name: "Sparsh Bhardwaj",
            text: "lorem ipsum dolor sit amet, consectrtur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Sparsh Bhardwaj",
        text: "lorem ipsum dolor sit amet, consectrtur adip",
        replies: [],
      },
      {
        name: "Sparsh Bhardwaj",
        text: "lorem ipsum dolor sit amet, consectrtur adip",
        replies: [],
      },
      {
        name: "Sparsh Bhardwaj",
        text: "lorem ipsum dolor sit amet, consectrtur adip",
        replies: [],
      },
      {
        name: "Sparsh Bhardwaj",
        text: "lorem ipsum dolor sit amet, consectrtur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [],
  },
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [],
  },
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [],
  },
  {
    name: "Sparsh Bhardwaj",
    text: "lorem ipsum dolor sit amet, consectrtur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-50">
      <img className="h-8" src={UserLogo} alt="User Logo" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="py-3">
      <Comment key={index} data={comment} />
      <div className="pl-5 border-2 border-l-gray ml-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
