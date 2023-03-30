import hashlib
import random
import string
import time


def find_hash(hash_algorithm, msg, zero):

    salt = ''.join(random.choices(string.ascii_letters + string.digits, k=23))
    time_current = time.time()

    nonce = 0
    while True:
        nonce += 1
        message_with_nonce_and_salt = msg.encode() + str(nonce).encode() + salt.encode()
        hash_value = hash_algorithm(message_with_nonce_and_salt).hexdigest()
        if hash_value .startswith('0' * zero):
            time_end = time.time()
            time_diff = time_end - time_current
            print(f"Found a nonce: {nonce}")
            print(f"Salt: {salt}")
            print(f"Hash: {hash_value }")
            print(f"Seconds: {str(time_diff)}\n")
            break


if __name__ == '__main__':

    message = "Hello world!"
    zeros = 6

    find_hash(hashlib.md5, message, zeros)