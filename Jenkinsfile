pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
                echo 'Building..'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo 'SonarQube Analysis'
                withSonarQubeEnv('sonarqube') {
                    sh 'npm run sonar'
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Deploy to Heroku') {
        steps {
            script { 
                if (env.BRANCH_NAME == 'main' ) {
                    echo 'Deploying to Heroku ....'
                    sh 'git remote -v'
                    sh 'heroku -v'
                    sh 'pwd'
                    sh 'heroku git:remote -a project-hello-world-app'
                    sh 'git push https://git.heroku.com/project-hello-world-app.git HEAD:refs/heads/main'
                    // sh 'git push heroku HEAD:master'
                    echo 'Heroku App deployment Complete !!'
                } else {
                    echo 'Code will not be deployed to Heroku '
                }
            }
        }
        }
        stage('Testcafe Tests') {
            steps {
                echo 'Running chrome in Headless mode'
                sh 'npm run testcafe-chrome'
            }
        }
    }
}
