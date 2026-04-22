pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/devronjonroyapu/student-result-portal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f student-container || exit 0'
                bat 'docker run -d -p 4000:3000 --name student-container student-app'
            }
        }
    }
}