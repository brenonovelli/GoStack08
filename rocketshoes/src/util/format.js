export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/**
 * Estava assim: "export const format"
 * O NumberFormat exporta algumas funções. Uma delas format
 *
 * Com a desestruturação passou a exportar uma função
 * export const { format }
 *
 * E depois renomeou-a
 * export const { format: formatPrice }
 */
