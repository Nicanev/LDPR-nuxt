import { serverSupabaseUser } from "#supabase/server";

const data = [{ id: 0, email: "nic7ven@gmail.com", content: "Nikita" }];

export default defineEventHandler(async (event) => {
	const user = await serverSupabaseUser(event);
	if (!user) {
		throw createError({ statusCode: 401, message: "Unathorized" });
	}
	return data.filter((profile) => profile.email === user.email);
});
