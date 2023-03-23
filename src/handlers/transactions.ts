import {prisma} from "../prismaClient";


type Transaction = {
    id: number
    description: string
    amount: number
    transactionDate: Date

}

type TransactionsResponse = {
    count: number
    data: Transaction[]
}
export const transactionsHandler = async (req, res, companyId) => {
    const {offset, limit} = req.query;
    try {
        const company = await prisma.company.findUnique({
            where: {
                id: companyId,
            },
        })
        const data = await prisma.transaction.findMany({
            skip: Number(offset),
            take: Number(limit),
            where: {
                cardId: company.cardId
            },
            orderBy: {
                transactionDate: 'desc'
            }
        });

        const count = await prisma.transaction.count({
            where: {
                cardId: company.cardId,
            },
        })

        const result: TransactionsResponse = {
            count,
            data,
        }

        res.status(200).send(result);
    } catch (e) {
        res.status(500).end();
    }
}