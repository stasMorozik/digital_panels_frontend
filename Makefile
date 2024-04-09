build_dev_front:
	docker build -f Dockerfile.dev ./  -t dev_front
run_dev_front:
	docker run --rm --name dev_front -v $(CURDIR)/src:/app/src dev_front