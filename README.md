# traking

#Queues Names
- splitter    --> basic_match:  **beforematch**
- basic_match --> merger:       **aftermatch**
- merger      --> selector:     **MERGER_QUEUE**
- selector    --> buildEntity:  **BUILD_ENTITY_QUEUE**
- selector    --> buildROGD:    **buildROGD**
- buildEntity --> createRGBE:   **BUILDED_ENTITY**
- buildROGD   --> createRGBE:   **createRGBE**
-    \* \t    --> logger:       **logger**
- createRGBE  --> createRGBE:   **CONNECT_D_E**
