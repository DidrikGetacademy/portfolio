function getGradioReply($message) {
    $api_url = 'https://didrikskjelbred-chatbot-api.hf.space/gradio_api/call/generate_reply';

    // Step 1: Send the POST request
    $postData = json_encode(["data" => [$message]]);

    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

    $postResponse = curl_exec($ch);
    if ($postResponse === false) {
        error_log("❌ POST cURL error: " . curl_error($ch));
        curl_close($ch);
        return "⚠️ API POST failed.";
    }
    curl_close($ch);

    $postResult = json_decode($postResponse, true);
    $eventId = $postResult['event_id'] ?? null;

    if (!$eventId) {
        error_log("❌ No event_id received from POST response.");
        return "⚠️ No event ID returned.";
    }

    // Step 2: Poll for the result
    $pollUrl = "https://didrikskjelbred-chatbot-api.hf.space/gradio_api/call/generate_reply/$eventId";
    $ch = curl_init($pollUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $pollResponse = curl_exec($ch);
    if ($pollResponse === false) {
        error_log("❌ Poll cURL error: " . curl_error($ch));
        curl_close($ch);
        return "⚠️ API Poll failed.";
    }
    curl_close($ch);

    $pollResult = json_decode($pollResponse, true);
    $reply = $pollResult['data'][0] ?? "⚠️ No response from bot.";

    error_log("✅ Gradio reply: $reply");
    return $reply;
}
