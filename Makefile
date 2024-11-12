.PHONY: all frontend auth clean

all: frontend

frontend:
	cd frontend && \
		npm install && \
		npm run build && \
		touch .env.local

	@echo File .env.local has been created in frontend folder. Run "make auth" to create secrets, and add the following:
	@echo
	@echo - AUTH_TRUST_HOST=true
	@echo - MICROSOFT_ENTRA_ID_CLIENT_ID
	@echo - MICROSOFT_ENTRA_ID_CLIENT_SECRET
	@echo - MICROSOFT_ENTRA_ID_TENANT_ID

auth:
	cd frontend && \
		npx auth secret

clean:
	cd frontend && rm -r .next