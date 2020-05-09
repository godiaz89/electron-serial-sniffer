pipeline {
    agent any
    environment { 
        CI = 'false'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'npm run build'
                sh 'ls -lh'
                sh 'ls -lh build/'
            }
        }
        stage('Docker build') { 
            steps {
                sh 'docker build -t soporte/albieromon:latest . ' 
            }
        }
        stage('Docker deploy') { 
            steps {
                sh 'docker container stop albieromon'
                sh 'docker container rm albieromon'
                sh 'docker run --name=albieromon -d -p 8081:80 soporte/albieromon:latest ' 
            }
        }
        stage('Deliver') { 
            steps {
                // input message: 'Pasar a produccion?' 
                sh './jenkins/deliver.sh' 
            }
        }
    }
}