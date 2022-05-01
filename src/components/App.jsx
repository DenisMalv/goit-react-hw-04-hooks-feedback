import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './Section/FeedbackOptions/FeedbackOptions';
import Statistics from './Section/Statistics/Statistics';

const App = () => {
  const [feedbackOption, setFeedbackOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(feedbackOption).reduce(
      (total, currentItem) => total + currentItem,
      0
    );
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedbackOption.good / total) * 100);
  };

  const handleButton = event => {
    setFeedbackOption(prevState => ({
      ...prevState,
      [event.target.textContent.toLowerCase()]:
        prevState[event.target.textContent.toLowerCase()] + 1,
    }));

    console.log(feedbackOption);
  };

  const { good, neutral, bad } = feedbackOption;

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOption)}
          onLeaveFeedback={handleButton}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
