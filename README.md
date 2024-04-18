# Blink Messenger

Blink Messenger is a real-time chat application built using Next.js, NextAuth, Upstash Redis, Pusher, and TailwindCSS. This application allows users to sign in with their Google accounts and engage in instant messaging with other users.

## Features

- Google Authentication: Users can sign in securely with their Google accounts.
- Real-time Messaging: Messages are sent and received instantly with Pusher's WebSocket functionality.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered React applications.
- [NextAuth](https://next-auth.js.org/): An authentication library for Next.js applications.
- [Upstash Redis](https://upstash.com/): A serverless Redis database used for storing chat messages.
- [Pusher](https://pusher.com/): A real-time communication platform used for enabling real-time messaging.
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [NextUI](https://nextui.org/): A React UI library for building modern and accessible user interfaces.

## Getting Started

To run the Blink Messenger application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/blink-messenger.git
   ```

2. Install dependencies:

   ```
   cd blink-messenger
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   UPSTASH_REDIS_REST_URL=<your_upstash_redis_url>
   UPSTASH_REDIS_REST_TOKEN=<your_upstash_redis_token>
   AUTH_GOOGLE_ID=<your_google_client_id>
   AUTH_GOOGLE_SECRET=<your_google_client_secret>
   AUTH_SECRET=<your_auth_secret>
   PUSHER_APP_ID=<your_pusher_app_id>
   NEXT_PUBLIC_PUSHER_APP_KEY=<your_pusher_app_key>
   PUSHER_APP_SECRET=<your_pusher_app_secret>
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Blink Messenger application.

## Deployment

To deploy the Blink Messenger application, follow the instructions provided by the hosting platform of your choice (e.g., Vercel, Netlify, or a custom server).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
