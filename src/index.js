import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="Interesting blog post"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I totally agree!!"
        avatar={Faker.image.avatar()} 
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
