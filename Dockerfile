FROM rabbitmq:3.8-management-alpine

RUN rabbitmq-plugins enable --offline rabbitmq_mqtt rabbitmq_stomp rabbitmq_web_mqtt rabbitmq_web_stomp

