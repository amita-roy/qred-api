export const company = (prisma, companyId) => async (req, res) => {
    try {
        const result = await prisma.company.findUnique({
            where: {
                id: companyId,
            },
            select: {id: true, name: true, card: true},
        });

        res.status(200).send(result);
    } catch (e) {
        res.status(500).end();
    }
};