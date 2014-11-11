package com.example.mike.tpbscraper;

import android.os.AsyncTask;
import android.webkit.WebView;

import com.google.gson.Gson;
import org.json.JSONArray;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;
import android.view.View;

public class GetTorrentTask extends AsyncTask<String, Void, String> {
    String callback;
    protected String doInBackground(String...strings) {
        this.callback = strings[0];

        JSONArray names = new JSONArray();
        Document doc = null;
        try {
            doc = Jsoup.connect("http://thepiratebay.se/top/207")
                    .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
                    .referrer("http://www.google.com").get();

            Elements newsHeadlines = doc.select("a.detLink");
            for (Element link : newsHeadlines) {
                names.put(link.text());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();
        return gson.toJson(names);
    }

    protected void onPostExecute(String result) {
        WebView webView = (WebView) findViewById(R.id.activity_main_webview);
        webView.loadUrl("javascript:window." + this.callback + "(" + result + ");");
    }
}