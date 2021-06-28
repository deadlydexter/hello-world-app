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
                    sh 'sudo cat > /home/ubuntu/.netrc << EOF \
                    machine git.heroku.com \
                     login satheesh91.ss@gmail.com \
                     password a5f7abda-6291-4302-b834-dc2e6205fe96 \
                    EOF'
                    sh 'git push https://git.heroku.com/project-hello-world-app.git HEAD:refs/heads/main'
                    echo 'Heroku App deployment Complete !!'
                } else {
                    echo 'Code will not be deployed to Heroku'
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
