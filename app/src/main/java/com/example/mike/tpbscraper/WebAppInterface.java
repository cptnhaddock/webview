package com.example.mike.tpbscraper;

import android.content.Context;
import android.os.AsyncTask;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.google.gson.JsonPrimitive;

import org.json.JSONArray;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

public class WebAppInterface {
    Context mContext;
    WebView mWebView;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c, WebView webView) {
        mContext = c;
        mWebView = webView;
    }

    @JavascriptInterface
    public void getTorrentNames(String callback) {
        new GetTorrentTask(mWebView).execute(callback);
    }

    private class GetTorrentTask extends AsyncTask<String, Void, String> {
        String callback;
        WebView mWebView;

        GetTorrentTask(WebView webView) {
            mWebView = webView;
        }

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
            mWebView.loadUrl("javascript:window." + this.callback + "(" + result + ");");
        }
    }
}
