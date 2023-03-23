import {prisma} from "../prismaClient";

export const activateCardHandler = async (req, res, companyId) => {
    try {
        const company = await prisma.company.findUnique({
            where: {
                id: companyId,
            },
        });

        const card = await prisma.card.findUnique({
            where: {id: company.cardId},
        });

        await prisma.card.update({
            where: {id: company.cardId},
            data: {status: "ACTIVE"},
        });

        res.status(200, "Activated the card").send(card);
    } catch (e) {
        res.status(500).end();
    }
};