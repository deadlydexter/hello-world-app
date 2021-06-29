// இது என்ன ?
// சொல்லிடாதீங்க அடிச்சு கூடா கேப்பாங்க அப்பவோம் சொல்லிடாதீங்க
const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl: 'http://52.202.78.198:9000/',
        options: {
            'sonar.sources': 'routes, app.js, views, public, bin',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': '',
            'sonar.testExecutionReportPaths': ''
        }
    }, () => { });
