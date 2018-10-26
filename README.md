# Youtube

[![N|Solid](http://icons.iconarchive.com/icons/dtafalonso/android-l/32/Youtube-icon.png)](https://localhost:4200)
This Application is designed for searching Youtube Videos and the result can be sorted by video title or published date.

### Project Requirement
  - Nodejs
  - npm
  - Angular CLI
  - Youtube API V3 Key
    ### How to install dependencies
    ##### Install Nodejs.
    Nodejs is requied because we are using npm(Node Package Manager) for dependencies installation.
    Download from [Node.js](https://nodejs.org/) v4+.
    or
    ```sh
    $ sudo apt-get update
    $ sudo apt-get install nodejs
    ```
    ##### Install npm.
    npm(Node Package Manager) is required for dependencies installation.
    ```sh
    $ sudo apt-get install npm
    ```
    
    ##### Install Angular CLI
    Angular CLI is a command line interface. It assists developers by generating code which follows the best practices as defined by https://angular.io, Angular’s home site.
    ```sh
    $ sudo npm install -g @angular/cli
    ```
    
    #### How to get Youtube API V3 Key
    Refer: https://developers.google.com/youtube/v3/getting-started
    Note: If you are using this for viewing purpose, you don't need API key. Skip this step.
    ### Install Project Dependencies
      - Goto project directive and install dependencies.
          ```sh
          $ cd Youtube
          $ npm install
          ```
          
    ## Development server
    
    Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
    Note: By default localhost port is 4200 until changed.
    ```sh
    $ sudo ng serve
    ```
    ## Description
    - This app uses Youtube API V3 to search the videos.
    - By default the search result shows 25 videos.
    - When the user opens the app, it shows default results provided by youtube API V3.
    ## How to use appilication
    - Navigate to http://localhost:4200/
    - In the search box, provide the video details that you are searching for. 
    - Hit Enter or press the search button to search
    - The app has a feature to 'sort by date' and 'sort by title' 
    - Upon clicking "Load More" button, it shows more 25 videos.


