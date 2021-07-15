<?php

namespace Drupal\decoupled_module\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for decoupled_module routes.
 */
class DecoupledModuleController extends ControllerBase {

  public function fetch(Request $request) {
    $client = \Drupal::httpClient();
    $request = $client->request('GET', 'https://rickandmortyapi.com/api/character/');
    $characters = $request->getBody()->getContents();

    return [
      '#theme' => 'characters',
      '#characters' => json_decode($characters, TRUE)['results'],
      '#attached' => [
        'drupalSettings' => [
          'characters' => json_decode($characters, TRUE)['results'],
        ],
      ]
    ];
  }

  public function log(Request $request) {
    $message = json_encode(['err' => $request->getContent(), 'user' => $request->server->get('HTTP_USER_AGENT')]);
    \Drupal::logger('decoupled')->error($message);
    return new JsonResponse(array('status' => TRUE));
  }
}
