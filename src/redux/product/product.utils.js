const defaultRatings = {
  "5_stars": 0,
  "4_stars": 0,
  "3_stars": 0,
  "2_stars": 0,
  "1_star": 0,
};

const ratingPercentage = (count, totalReviews) =>
  parseInt(((count * 100) / totalReviews).toFixed(0));

const calculateRatings = (product) => {
  const totalReviews = product.reviews.length;
  let totalRatings = 0;

  const ratingCount = product.reviews.reduce((total, { slug, rating }) => {
    totalRatings = totalRatings + rating;
    return { ...total, [slug]: total[slug] + 1 };
  }, defaultRatings);

  const ratings = [];
  for (const [key, value] of Object.entries(ratingCount)) {
    ratings.push({
      slug: key,
      count: value,
      percentage: totalReviews > 0 ? ratingPercentage(value, totalReviews) : 0,
    });
  }

  const averageRating = totalReviews > 0 ? totalRatings / totalReviews : 0;

  return {
    ratings,
    averageRating: parseFloat(averageRating.toFixed(1)),
    totalReviews,
  };
};

export const processProductDetails = (products, productUrlParam) => {
  const product = products[productUrlParam];
  const { ratings, averageRating, totalReviews } = calculateRatings(product);
  return { ...product, ratings, averageRating, totalReviews };
};
