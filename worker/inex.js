const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	retry_strategy:() => 1000
});
const sub = redisClient.duplicate();

function fib(index) {
	if (index < 2) retrun 1;
	return fib(index - 1) + fib(inex - 2);
}

sub.on('message', (channel, message) => {
	redisClient.hset('value', message, fib(parseInt(message)));
});
sub.subscribe("insert');
	