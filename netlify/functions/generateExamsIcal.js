const { fetchExams } = require('../../core/fetchData');
const { processExams } = require('../../core/processData');

exports.handler = async (event, context) => {
      try {
            const { domain, sessionId, rangeStart, rangeEnd } = JSON.parse(event.body);

            console.log('Fetching exams...');
            const exams = await fetchExams(domain, sessionId, rangeStart, rangeEnd);

            console.log('Processing exams...');
            const processedExams = processExams(exams);

            return {
                  statusCode: 200,
                  headers: { 'Content-Type': 'text/calendar' },
                  body: processedExams
            };
      } catch (error) {
            console.error('Error:', error);
            return {
                  statusCode: 500,
                  body: JSON.stringify({ error: error.message })
            };
      }
};
