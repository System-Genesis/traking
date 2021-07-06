# traking

### Queues Names
- splitter    --> basic_match:  **BASIC_MATCH_QUEUE**
- basic_match --> merger:       **MERGER_QUEUE**
- merger      --> selector:     **SELECTOR_QUEUE**
- recovary    --> selector:     **RECOVERY_QUEUE**
- selector    --> buildEntity:  **BUILD_ENTITY_QUEUE**
- selector    --> buildROGD:    **BUILD_ROGD_QUEUE**
- buildEntity --> createRGBE:   **CREATE_RGBE_ENTITY_QUEUE**
- buildROGD   --> createRGBE:   **CREATE_RGBE_ROGD_QUEUE**
- All         --> logger:       **LOG_QUEUE**
- createRGBE  --> createRGBE:   **CREATE_RGBE_CONNECT_DI_ENTITY_QUEUE**

### API's
