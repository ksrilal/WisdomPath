import type {MetadataRoute} from "next";

const baseUrl = "https://wisdompath.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: baseUrl, changeFrequency: "weekly", priority: 1},
    {url: baseUrl + "/en", changeFrequency: "weekly", priority: 0.9, alternates: {languages: {en: baseUrl + "/en", si: baseUrl + "/si"}}},
    {url: baseUrl + "/si", changeFrequency: "weekly", priority: 0.9, alternates: {languages: {en: baseUrl + "/en", si: baseUrl + "/si"}}}
  ];
}
