import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_KEY!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      console.log("jwt", account, token);

      // 카카오 로그인일 경우
      if (account?.provider === "kakao") {
        // TASK : DB에서 exUser가 있는지 확인해서 없다면 회원가입 시키고 있다면 그냥 token반환.
        // const exUser = await prisma.user.findFirst({
        //   where: { provider: "KAKAO", name: token.name!, email: token.email! },
        // });
        // // 등록된 유저가 아니라면 회원가입
        // if (!exUser) {
        //   await prisma.user.create({
        //     data: {
        //       name: token.name!,
        //       email: token.email!,
        //       photo: token.picture,
        //       provider: "KAKAO",
        //     },
        //   });
        // }
      }

      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // Send properties to the client, like an access_token from a provider.
      console.log("in next auth", session, token, user);
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
