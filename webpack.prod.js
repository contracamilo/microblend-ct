const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 1000,
						name: "[hash].[ext]",
						outputPath: "assets"
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css"
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["**/app.*"]
		})
	]
});
