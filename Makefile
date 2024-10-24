environment:
	conda env create --name flaskr -f environment.yml
# conda activate flaskr

website:
	cd hello-framework; \
	npm run dev