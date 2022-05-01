import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './Section/FeedbackOptions/FeedbackOptions';
import Statistics from './Section/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const handleButton = event => {
    // eslint-disable-next-line default-case
    switch (event.target.textContent.toLowerCase()) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
    }
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButton}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
