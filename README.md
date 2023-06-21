# Ruby on Rails with React.js Boilerplate

This boilerplate template provides a starting point for a Ruby on Rails application with React.js. It includes the basic configuration and structure to quickly get your app up and running.

## Table of Contents

- [Ruby version](#ruby-version)
- [System dependencies](#system-dependencies)
- [Configuration](#configuration)
- [Database creation](#database-creation)
- [Database initialization](#database-initialization)
- [How to run the test suite](#how-to-run-the-test-suite)
- [Services](#services)
- [Launching React](#launching-react)
- [Deployment instructions](#deployment-instructions)
- [Contributing](#contributing)
- [License](#license)

## Ruby version

This template uses Ruby version 2.7.4. Make sure you have Ruby 2.7.4 installed on your system. You can use a version manager like rbenv or RVM to manage your Ruby installations.

## System dependencies

To run this application, you need to have the following dependencies installed:

- Ruby (2.7.4)
- Rails (latest version)
- Node.js (14.x or higher)
- Yarn (latest version)

Make sure you have these dependencies installed and properly configured on your system.

## Configuration

To configure the application:

1. Clone the repository: `git clone <repository_url>`
2. Change into the application directory: `cd <application_directory>`
3. Install Ruby gems: `bundle install`
4. Install JavaScript dependencies: `yarn install`

## Database creation

To create the database for the application:

1. Run the database creation command: `rails db:create`

This will create the development and test databases specified in the configuration.

## Database initialization

To initialize the database with any necessary setup or seed data:

1. Run the database initialization command: `rails db:migrate` or `rails db:setup`

This will apply any pending migrations and set up the database tables.

## How to run the test suite

To run the test suite for the application:

1. Run the test suite command: `rails test`

This will execute the test suite and display the results.

## Services

This boilerplate template does not include any additional services like job queues, cache servers, or search engines. You can add these services as needed for your specific application requirements.

## Launching React

React has already been configured with React Router in this boilerplate template. To launch React:

1. Open a new Terminal window.
2. Change into the application directory: `cd <application_directory>`
3. Run the React development server: `yarn start`

This will start the React development server and launch the application in your default web browser.

## Deployment instructions

To deploy the application to a production environment, follow these steps:

1. Configure your production server settings in the appropriate deployment configuration files.
2. Precompile the assets for production: `rails assets:precompile`
3. Deploy the application code to your production server.
4. Run any necessary deployment tasks or migrations on the production server.
5. Start the application server on the production server.

Please refer to the deployment documentation for your chosen hosting platform or server configuration for detailed instructions.

## Contributing

If you'd like to contribute to this boilerplate template, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b your-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin your-branch-name`
5. Submit a pull request.

## License

This boilerplate template is open source and available under the [MIT License](LICENSE).