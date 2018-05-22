module.exports = {
    apps: [{
        name: 'CORE',
        script: './index.js',
    }],
    deploy: {
        production: {
            user: 'rick',
            host: 'ec2-52-14-23-213.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/aws_dev',
            ref: 'origin/master',
            repo: 'git@github.com:rickvlzaa/core.git',
            path: '/home/rick/microservices/core',
            'post-deploy': 'npm install --only=production && pm2 startOrRestart ecosystem.config.js'
        }
    }
}