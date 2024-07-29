import {auth} from "@/lib/auth";
import {NextResponse} from "next/server";
import {OrderDeskClient} from "@/lib/orderdesk";

export async function POST(req) {
    const session = await auth();
    if (session) {
        try {
            let body = await req.json();

            if (!body.email || !body.phone)
                return NextResponse.json(null, {status: 400});

            const odClient = new OrderDeskClient();

            let orders = odClient.getOrders({
                "email": body.email,
                "customer_phone": body.phone
            });

            return NextResponse.json(orders);
        } catch (e) {
            return NextResponse.json({error: e.message}, {status: 500});
        }
    } else {
        // Not Signed in
        return NextResponse.json(null, {status: 401});
    }
}
