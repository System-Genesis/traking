# traking

### Queues Names
- splitter    --> basic_match:  **BASIC_MATCH_QUEUE**
- basic_match --> merger:       **MERGER_QUEUE**
- merger      --> selector:     **SELECTOR_QUEUE**
- recovery    --> selector:     **RECOVERY_QUEUE**
- selector    --> buildEntity:  **BUILD_ENTITY_QUEUE**
- selector    --> buildROGD:    **BUILD_ROGD_QUEUE**
- buildEntity --> createRGBE:   **CREATE_RGBE_ENTITY_QUEUE**
- buildROGD   --> createRGBE:   **CREATE_RGBE_ROGD_QUEUE**
- All         --> logger:       **LOG_QUEUE**
- createRGBE  --> createRGBE:   **CREATE_RGBE_CONNECT_DI_ENTITY_QUEUE**

### API's

  ### TASK MANAGER
    
    port: 7706
    
    api/
      splitter/
          post('/all'
          post('/source/:source'
          post('/identifier/:id/source/:source'
          post('/identifier/:identifier'

      recovery/
        post('/all'
        post('/source/:source'
        post('/identifier/:identifier'
        post('/byDate/:dateMs'
    
      mergedUsers/
        get('/all'
        get('/source/:source'
        get('/identifier/:identifier'
        get('/byDate/:dateMs'
    
      daily/
        post('/hour/:hour/minute/:minute'

  ### MOCK KART
    
    port: 7700
    
    api/
      post('/generate'
      /eightSocks
        get('/'
        get('/personalNumber/:personalNumber'
        get('/identityCard/:identityCard'
        get('/domainUser/:domainUser'
    
      /aka
        get('/'
        get('/personalNumber/:personalNumber'
        get('/identityCard/:identityCard'
    
      /aD/S
        get('/'
        get('/personalNumber/:personalNumber'
        get('/identityCard/:identityCard'
        get('/domainUser/:domainUser'
    
      /aD/NN
        get('/'
        get('/personalNumber/:personalNumber'
        get('/identityCard/:identityCard'
        get('/domainUser/:domainUser'

      /city
        get('/'
        get('/personalNumber/:personalNumber'
        get('/identityCard/:identityCard'
        get('/domainUser/:domainUser'
    
      /sf
       get('/'
       get('/personalNumber/:personalNumber'
       get('/identityCard/:identityCard' 
       
  ### SPLITTER
  
      port: 9001

      /api
        post('/information'
          body: {
                 "dataSource": "aka" or "alias",
                  "runUID": "123",
                  "personalNumber": "5465468", - optional
                  "identityCard": "5465468",   - optional
                  "domainUser": "domainUser",  - optional
                }
        get('/information'
          body: {
                 "dataSource": "aka" or "alias",
                  "runUID": "123",
                  "personalNumber": "5465468", - optional
                  "identityCard": "5465468",   - optional
                  "domainUser": "domainUser",  - optional
                }
        
  ### MERGES API
  
      port: 6060

      /recovery
        post(''
        post('/entity/:identifier'
        post('/source/:source'
        post('/date/:dateMS'

      /get
        get(''
        get('/entity/:identifier'
        get('/source/:source'
        get('/date/:dateMS'
