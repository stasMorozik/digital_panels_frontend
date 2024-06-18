build_dev_front:
	docker build -f Dockerfile.dev ./  -t dev_front
run_dev_front:
	docker run --network host \
						 --rm \
						 --name dev_front \
						 -it \
						 -v $(CURDIR)/index.html:/app/index.html \
						 -v $(CURDIR)/src/:/app/src/ \
						 dev_front 
